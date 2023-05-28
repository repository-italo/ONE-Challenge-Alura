# ONE-Challenge-Alura
# Challenge ONE | Lógica de Programação | Decodificador de texto

----
Eu me chamo Italo e fiz esse encriptador de mensagens como desafio do curso ONE - Oracle Next Education - promovido pela Oracle e Alura. Aprendi e me diverti bastante na prática.

---
## Funcionamento do Software
As "chaves" de criptografia que utilizaremos são:<br>
A letra "e" é convertida para "enter"<br>
A letra "i" é convertida para "imes"<br>
A letra "a" é convertida para "ai"<br>
A letra "o" é convertida para "ober"<br>
A letra "u" é convertida para "ufat"<br>

Requisitos:

Deve funcionar apenas com letras minúsculas
Não devem ser utilizados letras com acentos nem caracteres especiais
Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"

A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções O resultado deve ser exibido na tela.

Extras:

Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.
Funcionalidades adicionais que eu desenvolvi pra agregar ao projeto:

Validação automática do texto digitado no textarea para permitir apenas letras minúsculas e espaçamentos. Acentuações, caracteres especiais e números, não serão aceitas mesmo que o usuário tente inserir esses caracteres, garantindo a funcionalidade da aplicação, evitando bugs e mensagens de erro pro usuário final. Pra melhorar a experiência, caracteres com acentuação e em letra maiúsculas são substituídos por caracteres válidos ao invés de serem removidos. Ex: ã -> a, A -> a, Á -> a. Se não houver substituição válida o caractere é removido da textarea.
Ao descriptografar, verificar se existe uma mensagem criptografada no texto, caso não tenha mensagem criptografada, exibir mensagem informando que nenhuma mensagem foi encontrada, caso tenha mensagem criptografada, seguir o fluxo normal da descriptografia. (Apenas no modo alura)
Animações nos botões para melhorar a experiência do usuário.
Mensagem de feedback informando que o texto foi copiado para área de transferência, dentro da aplicação ou em uma modal.
Design responsivo em qualquer dimensão
Mensagem de feedback depois de copiar o texto
Animações pra melhorar a experiência de usuário
O textarea se comporta de forma diferente de acordo com o dispositivo usado, de acordo com o protótipo. No desktop mantém seu tamanho fixo, adicionando uma barra de rolagem no conteúdo quando necessário. Em tablets e dispositivos móveis o textarea ajusta sua altura automaticamente pra caber o conteúdo adicional sem exibir barra de rolagem.
Clicando na logo da aplicação é possível alternar os modos de criptografia "alura" e "cesar", permitindo que o usuario escolha entre usar o método de criptografia da alura ou o método de criptografia da cifra de césar.

#Link do projeto funcionando
----
<a href="https://visionary-starship-2e5ae8.netlify.app/">Link do projeto<a>
---

  
  
  

