import React, { VFC } from 'react'
import ReactDOM from 'react-dom'
import { FormGroup, Input, StatusLabel } from 'smarthr-ui'
import styled, { css } from 'styled-components'

export const SignIn: React.FC<Record<string, unknown>> = () => (
    <div>
        <FormGroup
            title="singin"
            titleType="subSubBlockTitle"
            labelId="form-group-sample"
            innerMargin="XXS"
            errorMessages={[]}
        >
            <List>
                <li>
                    <Txt>email</Txt>
                    <Input aria-labelledby="form-group-sample" />
                </li>
                <li>
                    <Txt>password</Txt>
                    <Input
                        aria-labelledby="form-group-sample"
                        type="password" />
                </li>
            </List>
        </FormGroup >
    </div >
)

const List = styled.ul`
  padding: 0 24px;
  list-style: none;
  & > li:not(:first-child) {
    margin-top: 16px;
  }
`

const Txt = styled.p`
  margin: 0 0 8px 0;
`