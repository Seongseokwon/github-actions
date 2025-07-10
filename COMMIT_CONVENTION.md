# 커밋 메시지 컨벤션

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.

## 커밋 타입

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 포맷팅, 세미콜론 누락 등 (코드 변경 없음)
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가 또는 수정
- `chore`: 빌드 프로세스 또는 보조 도구 변경

## 예시

```bash
# 새로운 기능
git commit -m "feat: 사용자 로그인 기능 추가"

# 버그 수정
git commit -m "fix: 로그인 시 세션 만료 문제 해결"

# 문서 수정
git commit -m "docs: README 업데이트"

# 리팩토링
git commit -m "refactor: 로그인 로직 개선"

# 테스트 추가
git commit -m "test: 로그인 기능 테스트 추가"
```

## Breaking Changes

주요 변경사항이 있는 경우 `!`를 추가합니다:

```bash
git commit -m "feat!: API 응답 형식 변경"
```

## 버전 관리

- `feat`: 마이너 버전 증가
- `fix`: 패치 버전 증가
- `BREAKING CHANGE`: 메이저 버전 증가
