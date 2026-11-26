# Redes Industriais — Arquitetura, cabeamento e protocolos

Site da pesquisa **"Arquitetura, cabeamento e protocolos de redes locais e industriais"**
(Matheus Gomes Steingräber — SENAI, Cibersistemas para Automação, Tijucas, 2026),
no mesmo formato de portal de notícias do projeto [BancadaExpedicao](https://github.com/Twy1m/BancadaExpedicao).

## Conteúdo
- **Capa** com manchete, destaques, editorias e busca em todas as matérias
- **01 Introdução** e **02 Pirâmide da automação** (interativa: tecnologias por nível)
- **03–05 Bloco A** — Ethernet, Wi-Fi, fibra óptica
- **06–22 Bloco B** — Profinet, EtherNet/IP, Modbus RTU, Profibus DP/PA, HART/WirelessHART,
  Foundation Fieldbus H1/HSE, AS-i, IO-Link, DeviceNet, EtherCAT, Modbus TCP, CANopen, MQTT, OPC UA, CC-Link
  (cada uma com ficha rápida e os quatro eixos de análise em acordeões)
- **23 Quadro comparativo** com busca e filtros (determinísticas, energia pelo cabo, Ethernet/IP)
- **24 Considerações finais**, **25 Referências** (ABNT) e **26 Contato**

## Estrutura
```
index.html
css/styles.css   base (mobile)        css/news.css     portal de notícias
css/redes.css    complementos         css/desktop.css  layout ≥ 1024px
js/news.js       capa, rotas, busca   js/quadro.js     filtros do quadro
js/accordion.js  js/pyramid.js  js/menu.js
assets/img/      ilustrações SVG de cada matéria (ver LEIA-ME.txt)
```

