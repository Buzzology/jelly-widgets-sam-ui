# Deployment commands

# https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-s3.html
# Create stack: `aws cloudformation create-stack --stack-name --on-failure DELETE testerwidgets-ui-prod --template-body file://./infrastructure/01-infrastructure.yml --parameters file://./infrastructure/01-infrastructure-parameters.json`
# Update stack: `aws cloudformation update-stack --stack-name testerwidgets-ui-prod --template-body file://./infrastructure/01-infrastructure.yml --parameters file://./infrastructure/01-infrastructure-parameters.json`.
