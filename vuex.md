# O que é o Vuex?

É um gerenciador de estado para aplicações Vue. Ele funciona basicamente como
um objeto global que centraliza o estado da aplicação e junto com algumas regras
ele garante que esse estado só será mutado de forma previsível.

---

# Qual o problema?

Temos basicamente 2 problemas:

1) Múltiplas views dependem da mesma informação do estado;
2) Ações em componentes diferentes precisam atualizar a mesma informação do
estado;

Uma das soluções seria passar propriedades do componente pai para os filhos mas
essa prática se torna inviável quando você tem muitos componentes filhos e não
funciona para componentes irmãos.

Outra solução seria usar uma estratégia semelhante a que temos no OPA atualmente,
onde temos uma lista de eventos no componente pai que os filhos emitem valores e
assim esse componente pai faz alguma ação, podendo fazer broadcast de eventos
para seus filhos ou não.

A solução que o Vuex propõe é criar um objeto global e compartilhado entre os
componentes da aplicação e impondo algumas regras e conceitos conseguimos
um código melhor estruturado e mais ?manutenível?

---

# O que é *store*?

Uma store é um container que guarda o estado da aplicação.

Temos duas principais diferenças entre uma store e um objeto puro:

1) As stores são reativas, ou seja, qualquer componente que utilizar alguma informação do estado será atualizado de forma reativa e eficiente quando o estado for alterado;

2) A única forma de alterar o valor do estado de uma store é através de mutações.

---

# O que é *state*?

Um nome importante que surge quando falamos sobre estado de uma aplicação Vue é **Single State Three**, um objeto único que contém todo o estado da aplicação e serve com **single source of truth** (fonte única da verdade?).

Esse objeto único torna mais fácil a tarefa de encontrar alguma informação do nosso estado e ajuda a debuggar os estados de nossa aplicação.

*Vale ressaltar que os componentes ainda podem ter estados locais.*

---

# O que são *getters*?

As vezes precisamos pegar alguns dados do nosso estado e realizar alguma operação ou formatar sua saída. Os *getters* servem para evitar que dupliquemos nosso código.

Podemos falar que os *getters* podem ser comparados aos *computed attributes* dos componentes.

---

# O que são *mutations*?

As *mutations* são a única forma de atualizar a informação presente no estado.
As *mutations* devem ser síncronas.

---

# O que são *actions*?

As *actions* são semelhantes as *mutations* com alguns detalhes:

- Elas não alteram o estado, apenas executam mutations;
- *actions* podem realizar operações assíncronas;

---

# O que são *modules*?

Vocês podem se perguntar que em uma aplicação de grande porte o objeto global pode ficar muito grande e tornar a manutenção um pouco difícil.

Os *modules* servem para separar em partes menores o estado da nossa aplicação.

Cada *module* tem sua "parte" do estado, suas *actions*, seus *getter* e suas *mutations*.

---

# Quando usar o vuex?

Apesar do Vuex ajudar a lidar com o compartilhamento de estado entre os diferentes componentes da aplicação, ele traz vários conceitos novos e uma série de boilerplate para nossa aplicação.

Essa deve ser uma escolha visando a produtivadade a meio termo e se sua aplicação for de médio/grande porte, provavelmente você vai ter um dos problemas já citados.
