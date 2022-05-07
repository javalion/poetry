import {callGetAuthorWorks} from "../../apiClient";
import {useCallback, useEffect, useState} from "react";
import styled from "styled-components";

interface IProps {
  author: string | undefined
}

export const AuthorWorks = ({author} : IProps) => {

    const [works, setWorks] = useState<string[]>()

    const retrieveWorks = useCallback(async () => {
        if (author) {
            const response = await callGetAuthorWorks(author)
            setWorks(response.data.map((obj : {title: string})=>obj.title))
        }
    },[author])

    useEffect(() => {
          retrieveWorks()
    }, [author, retrieveWorks])

    return <Wrapper>
        <h2>{author ? "Works of " + author : null}</h2>
        {works && <ul>
            {works.map((work : string, idx) => <li key={idx + work}>{work}</li>)}
        </ul>
        }
    </Wrapper>
}

const Wrapper = styled.div`

  & > ul {
    text-align: left;
    margin-left: 10%;
  }

  & li {
    list-style: none;
    line-height: 1.5rem;
  }

  & li:nth-child(even) {
    background-color: #DDDDFF;
  }

  & li:hover {
    background-color: #fff3cc;
  }


`