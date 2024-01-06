/// <reference types="cypress" />
describe("로그인", () => {
  it("사용자는 아이디와 비밀번호로 사용해서 로그인한다.", () => {
    //given - 로그인 페이지에 접근한다.
    cy.visit("/login");

    cy.get("[data-cy=emailInput]").as("emailInput");
    cy.get("[data-cy=passwordInput]").as("passwordInput");
    cy.get("[data-cy=loginButton]").as("loginButton");

    //when - 아이디와 비밀번호를 입력하고 로그인 버튼을 클릭한다.
    cy.get("@emailInput").type("test@email.com");
    cy.get("@passwordInput").type("password");

    cy.get("@emailInput").invoke("val").should("eq", "test@email.com");
    cy.get("@passwordInput").invoke("val").should("eq", "password");
    cy.get("@loginButton").should("exist").click();

    //then - 로그인에 성공하고 메인 페이지로 이동한다.
    cy.url().should("include", "http://localhost:5173/");
  });
});