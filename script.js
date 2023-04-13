function copyEmail() {
    const emailToCopy = "verdinassi_@hotmail.com"; 
  
    navigator.clipboard.writeText(emailToCopy)
      .then(() => {
        alert("Endereço de email copiado para a área de transferência!");
      })
      .catch((error) => {
        console.error("Erro ao copiar endereço de email: ", error);
      });
  }