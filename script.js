diff --git a/script.js b/script.js
index 8b137891791fe96927ad78e64b0aad7bded08bdc..b6cd9c0deca58627d404385c183f81b1517ee4ad 100644
--- a/script.js
+++ b/script.js
@@ -1 +1,20 @@
+/*
+  NeoAki - JavaScript inicial
+  Exemplo simples de interação com botões
+*/
 
+// Espera o HTML carregar completamente antes de acessar elementos da página
+document.addEventListener("DOMContentLoaded", () => {
+  const loginBtn = document.getElementById("loginBtn");
+  const signupBtn = document.getElementById("signupBtn");
+
+  // Ação ao clicar no botão Login
+  loginBtn.addEventListener("click", () => {
+    alert("Você clicou em Login!");
+  });
+
+  // Ação ao clicar no botão Cadastro
+  signupBtn.addEventListener("click", () => {
+    alert("Você clicou em Cadastro!");
+  });
+});

