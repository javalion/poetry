import {useState} from "react";
import {AuthorList} from "../AuthorList/AuthorList";
import {AuthorWorks} from "../AuthorWorks/AuthorWorks";
import styled from 'styled-components';

export const Content = () => {
    const [author, setAuthor] = useState<string>()
    return <Wrapper>
      <AuthorList setAuthor={setAuthor}/>
      <AuthorWorks author={author} />
    </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  
  & > :first-child {
    flex-grow: 1;
    padding: 0 15px;
    border-right: 2px solid #666;
  }
  
  & > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 50%;
  }
`
