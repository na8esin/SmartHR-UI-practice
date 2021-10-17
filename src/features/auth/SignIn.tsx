import React, { VFC } from 'react'
import ReactDOM from 'react-dom'
import { FormGroup, Input, StatusLabel } from 'smarthr-ui'


const SampleStatusLabelProps: React.ComponentProps<typeof StatusLabel>[] = [
    {
        children: 'label 1',
        type: 'required'
    },
    {
        children: 'label 2',
        type: 'success'
    },
]

export const SignIn: React.FC<Record<string, unknown>> = () => (
    <FormGroup
        title="FormGroup sample"
        titleType="subSubBlockTitle"
        labelId="form-group-sample"
        innerMargin="XXS"
        statusLabelProps={SampleStatusLabelProps}
        helpMessage="help message text"
        errorMessages={['error message 1', 'error message 2']}
    >
        <Input aria-labelledby="form-group-sample" />
    </FormGroup>
)
