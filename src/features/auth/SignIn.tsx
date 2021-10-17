import React, { VFC } from 'react'
import ReactDOM from 'react-dom'
import { FormGroup, Input, StatusLabel } from 'smarthr-ui'


const SampleStatusLabelProps: React.ComponentProps<typeof StatusLabel>[] = [
    {
        children: 'required',
        type: 'required'
    },
]

export const SignIn: React.FC<Record<string, unknown>> = () => (
    <div>
        <FormGroup
            title="email"
            titleType="subSubBlockTitle"
            labelId="form-group-sample"
            innerMargin="XXS"
            statusLabelProps={SampleStatusLabelProps}
            helpMessage="help message text"
            errorMessages={[]}
        >
            <Input aria-labelledby="form-group-sample" />
        </FormGroup>
        <FormGroup
            title="password"
            titleType="subSubBlockTitle"
            labelId="form-group-sample"
            innerMargin="XXS"
            statusLabelProps={SampleStatusLabelProps}
            helpMessage="help message text"
            errorMessages={[]}
        >
            <Input
                aria-labelledby="form-group-sample"
                type="password" />
        </FormGroup>
    </div>
)
