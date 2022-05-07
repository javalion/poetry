import {callGetAuthors, callGetAuthorWorks} from "../../apiClient";
import {useEffect, useState} from "react";
import styled from "styled-components";

interface IProps {
  author: string | undefined
}

export const AuthorWorks = ({author} : IProps) => {

    const [works, setWorks] = useState<string[]>()

    const retrieveWorks = async () => {
        if (author) {
            const response = await callGetAuthorWorks(author)
            setWorks(response.data.map((obj : {title: string})=>obj.title))
        }
    }

    useEffect(() => {
          retrieveWorks()
    }, [author, retrieveWorks])

    return <Wrapper>
        <h2>{author ? "Works of " + author : null}</h2>
        {works && <ul>
            {works.map((work : string) => <li key={work}>{work}</li>)}
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