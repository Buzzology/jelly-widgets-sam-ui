# Setting up deployment
https://aws.plainenglish.io/from-github-to-continuous-deployment-in-5-minutes-7f9c1c7702b1
https://github.com/james-turner/github-to-ci-in-5-minutes

### Creating a connection to your github account
- Open aws console
- Create a new dummy code pipeline
- Create a github connection
- Verify that you've got a valid github connect:
```
aws codestar-connections list-connections \
    --provider-type-filter GitHub --max-results 10 \
    --query "Connections[?ConnectionStatus=='AVAILABLE']"

[
    {
        "ConnectionName": "my-connection-name",
        "ConnectionArn": "my-connection-arn",
        "ProviderType": "GitHub",
        "OwnerAccountId": "000000",
        "ConnectionStatus": "AVAILABLE"
    }
]
```

### Creating the static website



