# 🔗 TrustChain — Secure Donation Platform

![Blockchain](https://img.shields.io/badge/Blockchain-Solana-9945FF)
![Status](https://img.shields.io/badge/Status-MVP_v0.1-green)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Network](https://img.shields.io/badge/Network-Solana_Devnet-14F195)

**TrustChain** é uma plataforma de doações com **prova de impacto em blockchain**. Não basta registrar que o dinheiro foi doado — aqui, a comunidade valida se o impacto foi real. Cada doação é rastreada na rede Solana, cada ação da ONG vira um registro imutável, e cada beneficiário pode confirmar a entrega.

> *"Não doamos dinheiro. Validamos impacto."*

---

## 🎯 O Problema

O setor de doações enfrenta uma crise de confiança estrutural:

- Doadores não sabem **para onde o dinheiro realmente vai**
- ONGs lutam para **provar credibilidade** sem ferramentas adequadas
- Relatórios em PDF são facilmente falsificáveis
- **Falta a camada final:** mesmo com blockchain, quem garante que o impacto registrado é verdadeiro?

**A TrustChain resolve isso com validação descentralizada pela comunidade.**

---

## 💡 A Solução

Plataforma de doações onde a prova de impacto é gerada em duas camadas:

| Camada | O que é |
| :--- | :--- |
| **Técnica** | Transação registrada e imutável na blockchain Solana |
| **Social** | Comunidade valida se o impacto realmente aconteceu |

Juntas, formam **prova social + prova técnica** — o diferencial que nenhuma plataforma atual oferece.

---

## 🚀 Como Funciona

### 🏷️ 1. Campanha com TAG
A ONG cria uma campanha categorizada por tipo de causa:
```
"Enchentes no RS"  |  "Ajuda alimentar SP"  |  "Água limpa BA"
```

### 💸 2. Doação registrada on-chain
O doador contribui normalmente. Cada doação gera um **hash público e imutável** na rede Solana via programa Anchor.

### 📦 3. ONG registra o impacto
A ONG submete provas da execução:
- Descrição da ação ("Distribuímos 100 marmitas")
- Fotos e documentos armazenados via IPFS
- Hash da transação vinculado à prova

### 👥 4. Comunidade valida *(O Diferencial 🔥)*
Pessoas que receberam ou presenciaram a ação podem:
- 👍 Confirmar a entrega
- 💬 Comentar
- ⭐ Avaliar (1–5 estrelas)

### 📊 5. Score de Impacto gerado automaticamente
```
87% das pessoas confirmaram
12 avaliações positivas · 1 negativa
Score: 9.1 / 10
```
Esse score vira reputação pública e permanente da ONG na blockchain.

---

## ⚡ Por que Solana?

| Critério | Motivo |
| :--- | :--- |
| **Alta velocidade** | Transações confirmadas em ~400ms |
| **Taxas baixíssimas** | ~$0,00025 por transação — viável para microdoações |
| **Escalabilidade** | Suporta alto volume sem congestionamento |
| **Transparência nativa** | Tudo auditável via Solana Explorer |
| **Ecossistema ativo** | Anchor Framework para contratos robustos |

> Sem Solana, o modelo de microdoações com validação comunitária não seria economicamente viável em escala.

---

## 🛠️ Arquitetura do Sistema

```
      Usuário
         |
         v
  Frontend (React)
         |
         v
  Backend (FastAPI)
    /         |         \
   v          v          v
PostgreSQL  Solana     Storage (IPFS)
            (Anchor)   imagens/provas
    |          |
    +---> Hash de transações <---+
```

**Stack completa:**

- **Smart Contracts:** Rust + Anchor Framework
- **Rede:** Solana (Devnet → Mainnet)
- **Frontend:** React / Next.js
- **Backend:** FastAPI (Python)
- **Banco de dados:** PostgreSQL
- **Armazenamento:** IPFS (provas de impacto, fotos, relatórios)
- **Integração Web3:** `@solana/web3.js` + Anchor IDL

---

## 💰 Modelo de Negócio

| Canal | Descrição |
| :--- | :--- |
| **Taxa por transação** | % pequena sobre cada doação processada |
| **Planos premium para ONGs** | Analytics avançado, destaque, relatórios automáticos |
| **NFTs de impacto** | Doadores recebem NFT como comprovante gamificado |
| **Parcerias ESG** | Empresas que buscam transparência nas ações de impacto social |

---

## 🔥 Diferenciais

- ✅ **Não é só doação** → é prova verificável de impacto real
- ✅ **Validação dupla** → técnica (blockchain) + social (comunidade)
- ✅ **Score de reputação** de ONGs gerado on-chain
- ✅ **Transparência em tempo real** — hash público imediato
- ✅ **Registro imutável** na rede Solana
- ✅ **Gamificação** com NFTs de impacto para doadores

---

## 🗺️ Roadmap

### MVP (Hackathon)
- [x] Interface da plataforma (landing + fluxo de doação)
- [x] Arquitetura blockchain definida (Solana + Anchor)
- [ ] Criar 1 campanha piloto na Devnet
- [ ] Implementar doação com registro on-chain
- [ ] Registrar uso do dinheiro pela ONG
- [ ] Dashboard de impacto com score da comunidade

### Próximos Passos
- [ ] Integração com carteira real (Phantom / Solflare)
- [ ] Sistema de reputação de ONGs on-chain
- [ ] Upload de provas via IPFS com hash vinculado
- [ ] Validação comunitária com score automático
- [ ] Expansão para múltiplas campanhas simultâneas
- [ ] NFTs de impacto para doadores (gamificação)

---

## 🏗️ Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+
- Rust + Solana CLI
- Anchor CLI
- Python 3.10+ (backend)

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/trustchain.git
cd trustchain
```

### 2. Instale as dependências do frontend
```bash
cd frontend
npm install
```

### 3. Configure o programa Anchor (Solana)
```bash
cd program
anchor build
anchor deploy --provider.cluster devnet
```

### 4. Inicie o backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 5. Configure as variáveis de ambiente
```bash
cp .env.example .env
# Edite: SOLANA_RPC_URL, PROGRAM_ID, DATABASE_URL
```

### 6. Inicie o frontend
```bash
cd frontend
npm run dev
```

Acesse: `http://localhost:3000`

---

## 🛡️ Segurança e Confiança

- **Program ID:** `TrustXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` *(Devnet)*
- **Contratos auditáveis:** Código Rust/Anchor público no repositório
- **Verificação de ONGs:** Due diligence jurídica antes do cadastro
- **IPFS:** Provas de impacto armazenadas de forma descentralizada

---

## 📊 Mercado

- **Mercado global de doações:** bilhões de dólares por ano
- **Crescimento de:** fintechs sociais, Web3, economia de impacto
- **Público-alvo:** doadores digitais (Web2 → Web3), ONGs, empresas com ESG

> **Insight central:** Confiança é o maior gargalo do setor de doações — e também a maior oportunidade.

---

## 👥 Time

| Nome | Papel |
| :--- | :--- |
| **Carlos** | Dev Back-end + Business |
| **Adam** | Design do Pitch |
| **Patrícia** | Dev Front-end |
| **Bruno** | Dev BlockChain |

---

## 📄 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

<div align="center">
  <strong>TrustChain — Secure Donation Platform</strong><br>
  Construído com 💙 para provar que transparência e propósito engajam.
</div>
