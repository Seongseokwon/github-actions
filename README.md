# GitHub Actions 자동배포 프로젝트

Vue.js 3 + Vite 기반의 자동배포 프로젝트입니다.

## 🚀 자동배포 시스템

### Semantic Release

- [Conventional Commits](https://www.conventionalcommits.org/) 기반 자동 버저닝
- 자동 CHANGELOG 생성
- GitHub Release 자동 생성

### 배포 환경

- **개발 환경**: AWS ECS (dev cluster)
- **운영 환경**: AWS ECS (prod cluster)
- **컨테이너 레지스트리**: AWS ECR

## 📋 사용법

### 1. 개발 시작

```bash
npm install
npm run dev
```

### 2. 커밋 및 배포

```bash
# 기능 추가
git commit -m "feat: 새로운 기능 추가"

# 버그 수정
git commit -m "fix: 버그 수정"

# dev 브랜치에 푸시하면 자동 배포
git push origin dev
```

### 3. 수동 배포

GitHub Actions에서 `Semantic Release and Deploy` 워크플로우를 수동으로 실행할 수 있습니다.

## 🔧 설정 파일

- `.releaserc.json`: semantic-release 설정
- `.github/workflows/semantic-release.yml`: 자동배포 워크플로우
- `COMMIT_CONVENTION.md`: 커밋 메시지 가이드

## 📝 커밋 컨벤션

자세한 내용은 [COMMIT_CONVENTION.md](./COMMIT_CONVENTION.md)를 참조하세요.
