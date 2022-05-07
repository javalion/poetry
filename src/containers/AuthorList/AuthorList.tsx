import styled from "styled-components";
import {callGetAuthors} from "../../apiClient";
import {useEffect, useState} from "react";

interface IProps {
  setAuthor: (author: string) => void
}

export const AuthorList = ({setAuthor} : IProps) => {

    const [authors, setAuthors] = useState<string[]>()

    const retrieveAuthors = async () => {
        const response = await callGetAuthors()
        setAuthors(response.data.authors)
    }

    useEffect(() => {
      retrieveAuthors().catch(() => alert("Unable to retrieve authors"))
    }, [])

    return <Wrapper>
        <h2>Authors</h2>
        <hr />
        {authors && <ul>
            {authors.map((author) => <li key={author} onClick={() => setAuthor(author)}>{author}</li>)}
        </ul>}
    </Wrapper>
}

const Wrapper = styled.div`
  height: 100%;

  & > ul {
    text-align: left;
  }

  & li {
    list-style: none;
    line-height: 1.5rem;
  }

  & li:hover {
    background-color: #e1d397;
  }
`