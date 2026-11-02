# Direção visual

O site apresenta Cristian Weissmantel, desenvolvedor pleno, suas tecnologias e seus projetos. A abertura destaca nome e cargo ao lado da interface real de uma aplicação. Os textos descrevem atuação, funcionalidades e decisões, sem slogans de campanha. A revisão de 01/11/2026 segue o alinhamento do README, incluindo a experiência dos projetos pessoais nas skills.

## Tokens

| Papel                  | Cor       |
| ---------------------- | --------- |
| Azul estrutural        | `#142c54` |
| Índigo de contato/ação | `#4f46e5` |
| Ciano de destaque      | `#7ee6f2` |
| Fundo de leitura       | `#f7f9fc` |
| Texto secundário       | `#56657a` |
| Linhas                 | `#dbe2ec` |

Manrope dá forma aos títulos e ao monograma; DM Sans sustenta a leitura. Ambas são variáveis e hospedadas localmente. Alinhamento à esquerda, largura de leitura limitada e títulos com espaçamento compacto.

```text
Desktop                         Celular
nome             navegação      nome             menu
título forte | produto real     título
apresentação | seletor          apresentação / ações
ações        | case             produto / seletor
projeto 01: imagem | contexto   imagem
projeto 02: contexto | imagem   contexto / case / código
outros projetos                 outros projetos
experiência / sobre / contato  experiência / sobre / contato
```

A paleta azul/índigo/ciano do site foi preservada nesta revisão. As tecnologias aparecem em quatro grupos por área, com tags de texto legíveis. Nextage e Worklog conservam suas interfaces nas capturas; os produtos não recebem uma marca substituta.

Na revisão inicial, a proposta foi ajustada para evitar um mural de cards iguais: dois cases com composições alternadas, três projetos complementares menores, laboratório em linha e experiência em uma faixa própria. O único movimento de entrada está na vitrine; a troca de produto responde à ação do visitante. `prefers-reduced-motion` remove entrada, transições, inclinação e rolagem suave.
