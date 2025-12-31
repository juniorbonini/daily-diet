# Daily Diet App 🥗

Aplicativo mobile desenvolvido em **React Native (Expo)** com foco em organização de refeições e acompanhamento de dieta, utilizando armazenamento local e boas práticas de arquitetura.

Este projeto está sendo desenvolvido de forma **incremental**, seguindo um cronograma técnico bem definido, com foco em consolidação de fundamentos antes da implementação de funcionalidades avançadas.

---

## 📌 Objetivo do Projeto

Permitir que o usuário:

- Cadastre refeições com nome, descrição, data e horário
- Edite refeições já cadastradas
- Exclua refeições com confirmação
- Visualize estatísticas sobre aderência à dieta
- Navegue entre telas utilizando navegação em pilha
- Tenha os dados persistidos localmente no dispositivo

---

## 🧠 Abordagem de Desenvolvimento

Este projeto segue uma abordagem **didática e progressiva**, priorizando:

- Consolidação de fundamentos
- Clareza arquitetural
- Separação de responsabilidades
- Código legível, escalável e tipado

Antes de avançar para backend ou lógicas mais complexas, o foco está em:
- Navegação
- Tipagem
- Estado
- Persistência local (AsyncStorage)

---

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **Styled-components**
- **React Navigation (Native Stack)**
- **AsyncStorage**
- **Yarn** (gerenciador de pacotes)

---

🗂️ Cronograma de Desenvolvimento
Etapas planejadas:

[X] Estrutura inicial do projeto

[X] Configuração do repositório Git

[X] Definição da arquitetura de pastas

[X]Configuração do tema global

 Configuração da navegação

 [X] Criação do tipo Meal
 
 [X] Implementação do AsyncStorage (CRUD)
 
 [] Tela Home (listagem de refeições)
 
 [] Formulário de criação
 
 [] Tela de detalhes
 
 [] Edição de refeição
 
 [] Exclusão com confirmação
 
 [] Estatísticas
 
 [] Telas de feedback

---
## 📂 Estrutura do Projeto

```bash
src/
├── components/    # Componentes reutilizáveis (Button, Input, List, etc.)
├── routes/        # Configuração de navegação da aplicação
├── screens/       # Telas do aplicativo
├── storage/       # Lógica de persistência e manipulação de dados
├── theme/         # Tema global (cores, fontes, espaçamentos)
├── types/         # Tipagens globais (Meal, rotas, etc.)
└── App.tsx        # Entrada principal da aplicação
