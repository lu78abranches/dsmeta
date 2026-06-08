# 🪧 CoreMetrics

## ✨ Nome: CoreMetrics - Relatório de Vendas

## 🌐 Projeto

## - [Deploy (projeto em produção)](https://core-metrics.netlify.app/)

### 🎯 Objetivo do Projeto
O objetivo deste projeto é desenvolver uma aplicação Fullstack que fornece uma página interativa para exibição de relatórios de vendas. A aplicação permite filtrar as transações por um período de datas específico, exibindo detalhes cruciais como o valor da venda, o nome do vendedor e a data da transação. Adicionalmente, o usuário pode selecionar uma venda específica e disparar uma notificação instantânea via SMS para um celular cadastrado.

---

## 🛠️ Tecnologias e Arquitetura

### **Front-End**
*   **Framework:** React
*   **Linguagem:** TypeScript
*   **Estilização:** CSS3 / HTML5
*   **Design de Interface:** Figma
*   **Hospedagem:** Netlify

### **Back-End**
*   **Framework:** Spring Boot (Java)
*   **Gerenciador de Dependências:** Maven
*   **Segurança e Comunicação:** CORS integrado para requisições do Netlify
*   **Hospedagem:** Render

### **Banco de Dados**
*   **Produção:** PostgreSQL (Instância gerenciada no Render)
*   **Testes/Local:** H2 Database (Banco em memória)

### **Serviços de Terceiros**
*   **Disparo de Mensagens:** Twilio API (Serviço de SMS)

---

## 📋 Documento de Requisitos

### 1. Requisitos Funcionais (RF)
*   **RF-001 [Listagem de Vendas]:** A aplicação deve exibir uma tabela contendo todas as vendas registradas com nome do vendedor, data da transação, número de visitas, quantidade de vendas e o valor total.
*   **RF-002 [Filtro por Data]:** O usuário deve ser capaz de selecionar uma data inicial e uma data final para filtrar os registros exibidos na tabela de relatórios.
*   **RF-003 [Envio de SMS]:** O sistema deve disponibilizar um botão associado a cada venda que, ao ser clicado, realiza o envio de um SMS contendo o resumo daquela venda específica.
*   **RF-004 [Notificação Visual]:** O frontend deve exibir uma notificação na tela (Toast) confirmando se o SMS foi despachado com sucesso ou se houve alguma falha no envio.

### 2. Requisitos Não Funcionais (RNF)
*   **RNF-001 [Persistência de Dados]:** Todos os dados de vendas e configurações em ambiente de produção devem ser armazenados de forma persistente em um banco de dados PostgreSQL.
*   **RNF-002 [Segurança de Credenciais]:** Nenhuma chave privada ou credencial do banco de dados e da API do Twilio deve ficar exposta no código fonte; todas devem ser injetadas via Variáveis de Ambiente (`Environment Variables`).
*   **RNF-003 [Design Responsivo]:** A interface do usuário desenvolvida no React deve ser responsiva e se adaptar corretamente a telas de computadores e dispositivos móveis, seguindo o protótipo do Figma.
*   **RNF-004 [Disponibilidade Gratuita]:** A infraestrutura do backend e do banco de dados deve rodar de forma estável dentro dos limites de containers Docker sob as regras do plano Free do Render.

---

## ⚙️ Variáveis de Ambiente Necessárias (Configuração)

Para que a aplicação inicialize corretamente na hospedagem (Render), as seguintes propriedades de ambiente devem estar cadastradas:


| Variável | Descrição |
| :--- | :--- |
| `SPRING_DATASOURCE_URL` | URL de conexão JDBC com o banco PostgreSQL (`jdbc:postgresql://...`) |
| `SPRING_DATASOURCE_USERNAME` | Usuário de acesso ao banco PostgreSQL |
| `SPRING_DATASOURCE_PASSWORD` | Senha de acesso ao banco PostgreSQL |
| `TWILIO_SID` | ID de identificação da conta Twilio (Account SID) |
| `TWILIO_KEY` | Chave de autenticação privada do Twilio (Auth Token) |
| `TWILIO_PHONE_FROM` | Número de telefone remetente fornecido pelo Twilio |
| `TWILIO_PHONE_TO` | Número de telefone de destino validado para o recebimento do SMS |

### 📬 Contact & Developer

##### Luis Abranches/GitHub
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lu78abranches)

##### Luis Abranches/LinkedIn 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luis-abranches/)
