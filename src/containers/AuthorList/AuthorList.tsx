import styled from "styled-components";

interface IProps {
  setAuthor: (author: string) => void
}

export const AuthorList = ({setAuthor} : IProps) => {
    return <Wrapper>
        <h2>Authors</h2>
    </Wrapper>
}

const Wrapper = styled.div`
  height: 100%;
`