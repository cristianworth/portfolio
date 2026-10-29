# Direção visual

O site apresenta um desenvolvedor de backend a quem quer conhecer aplicações e o raciocínio por trás delas. A composição usa o contraste entre uma abertura tipográfica e a interface real de um produto. O título é a assinatura visual; o restante dá espaço às capturas e à leitura.

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

A referência azul/índigo/ciano do perfil foi adaptada sem reproduzir os badges ou banners do GitHub. Nextage conserva o tom verde da sua captura; Worklog mantém sua interface e contexto azul. Os produtos não recebem uma marca substituta.

Na revisão inicial, a proposta foi ajustada para evitar um mural de cards iguais: dois cases com composições alternadas, três projetos complementares menores, laboratório em linha e experiência em uma faixa própria. O único movimento de entrada está na vitrine; a troca de produto responde à ação do visitante. `prefers-reduced-motion` remove entrada, transições, inclinação e rolagem suave.
