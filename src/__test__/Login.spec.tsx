import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, renderHook, waitFor } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const queryClient = new QueryClient({
  defaultOptions: {},
});

describe("로그인 테스트", () => {
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
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useLogin(), { wrapper });

    // then - 에러메세지가 표시됨
    await waitFor(() => result.current.isError);
  });
});
