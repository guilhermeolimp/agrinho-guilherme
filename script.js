document.addEventListener('DOMContentLoaded', () => {
  const mainForm = document.getElementById('main-form');
  const contactForm = document.getElementById('contact-form');

  // Função para validar campos simples (não vazio)
  function validarCampos(form) {
    for (const element of form.elements) {
      if (element.hasAttribute('required') && !element.value.trim()) {
        alert(`Por favor, preencha o campo "${element.name || element.id}" corretamente.`);
        element.focus();
        return false;
      }
      if (element.type === 'url' && element.value.trim()) {
        try {
          new URL(element.value);
        } catch {
          alert(`Por favor, insira um URL válido no campo "${element.name || element.id}".`);
          element.focus();
          return false;
        }
      }
      if (element.type === 'email' && element.value.trim()) {
        // Simples validação de email
        const re = /\S+@\S+\.\S+/;
        if (!re.test(element.value)) {
          alert(`Por favor, insira um email válido no campo "${element.name || element.id}".`);
          element.focus();
          return false;
        }
      }
    }
    return true;
  }

  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarCampos(mainForm)) {
      alert('Formulário enviado com sucesso!');
      mainForm.reset();
    }
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarCampos(contactForm)) {
      alert('Mensagem enviada com sucesso!');
      contactForm.reset();
    }
  });
});
