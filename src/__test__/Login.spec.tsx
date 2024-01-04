import "@testing-library/jest-dom";
import * as nock from "nock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  render,
  renderHook,
  waitFor,
  screen,
  fireEvent,
} from "@testing-library/react";
import LoginPage from "../pages/LoginPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const queryClient = new QueryClient({
  defaultOptions: {},
  logger: {
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === "test" ? () => {} : console.error,
  },
});

const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("로그인 테스트", () => {
  // 에러메세지가 나타나는지 확인하기 위해 console.error를 mock함
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  // mock을 해제함
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test("로그인에 실패하면 에러메세지가 나타난다.", async () => {
    // given - 로그인 페이지가 그려짐
    const routes = [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/login"],
      initialIndex: 0,
    });

    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );

    // when - 로그인에 실패함
    nock("http://www.example.com")
      .post("/user/login", { username: "test@email.com", password: "password" })
      .reply(400, { msg: "유저가 없습니다." });

    const emailInput = screen.getByLabelText("이메일");
    const passwordInput = screen.getByLabelText("비밀번호");

    fireEvent.change(emailInput, {
      target: {
        value: "test@email.com",
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: "password",
      },
    });

    const loginButton = screen.getByRole("button", { name: "로그인" });
    fireEvent.click(loginButton);

    const { result } = renderHook(() => useLogin(), { wrapper });

    // then - 에러메세지가 표시됨
    await waitFor(() => result.current.isError);
    const errorMessage = await screen.findByTestId("error-message");
    expect(errorMessage).toBeInTheDocument();
  });
});
