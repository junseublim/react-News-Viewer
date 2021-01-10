# 리액트 뉴스 뷰어 사이트

## How To run
```
$ yarn install
$ yarn start
```

## 학습 노트

### styled-components props로 스타일 주기

css를 사용하면 컴포넌트 안에 프로퍼티 값으로 원하는 값을 주고 style을 프로퍼티에 따라 다르게 줄 수 있다.

```js
<Component isSelected={true}/>
```
```js
import styled, {css} from 'styled-components';

const Component = styled.div`
    ${props =>
        props.isSelected && css`
            color: blue;
        `
    }
`
```

혹은 react-router-dom에서 제공하는 NavLink를 이용하면 링크에 스타일을 줄 수 있다.
```js
const Category = styled(NavLink)`
    // 선택되었을 시 스타일
    &.active {
        font-weight : 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }
`;
```

