# Tester Widgets AWS SAM UI
This project implements a React UI for the AWS SAM implementation of TesterWidgets.

## Notes
Reference project for React: https://github.com/Buzzology/jelly-widgets/tree/master/UI
Reference typescript with redux project: https://github.com/reduxjs/cra-template-redux-typescript

## Deploying via cloudformation
`aws cloudformation create-stack --stack-name test-local-stack --template-body code-pipeline.yml --parameters code-pipeline-parameters.json`
