# CLAUDE.md

## 프로젝트 개요

동전 던지기로 결정을 도와주는 웹 서비스. 기존 Flutter 앱(`~/Desktop/Side-Project/flip-coin/decide_now/`)의 웹 버전.

### 핵심 철학

Steven Levitt(시카고대 경제학 교수) 연구에 기반:
- 동전 던지기로 결정한 사람 중 **63%가 실제로 실행**, 행복도 상승
- "완벽한 결정보다 어떤 결정이든 내리고 행동하는 것이 중요"
- 앱 슬로건: **"고민 그만, 행동하자"**

### 디자인 방향

- 밝고 팝한 일러스트 스타일 (손그림/스케치 느낌, 따뜻한 톤)
- 둥글둥글한 캐릭터 동전 (눈/볼터치/미소가 있는 귀여운 얼굴)
- 여백 많고 깔끔한 레이아웃 + 부드러운 마이크로 애니메이션
- 레퍼런스:
  - https://www.designrush.com/best-designs/websites/min-jea-seo-website-design
  - https://dribbble.com/shots/22734163-Draw-illustrations

## 규칙

- 항상 한국어로 대답할 것
- 기존 Flutter 앱의 텍스트/메시지를 참고하되, 웹에 맞게 조정
- 모바일 퍼스트 반응형 (max-width 480px 중앙 정렬)
