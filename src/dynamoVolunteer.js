import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: import.meta.env.VITE_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  },
});

const TABLE = "VolOpps";
const docClient = DynamoDBDocumentClient.from(client);

export async function createOpportunity(opportunity) {
  await docClient.send(new PutCommand({ TableName: TABLE, Item: opportunity }));
}

export async function scanOpportunity() {
  const { Items } = await docClient.send(new ScanCommand({ TableName: TABLE }));
  return Items || [];
}

export async function deleteOpportunity(id) {
  await docClient.send(new DeleteCommand({ TableName: TABLE, Key: { id } }));
}

export async function toggleOpportunity(id, isFilled) {
  await docClient.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #isFilled = :val",
      ExpressionAttributeNames: { "#isFilled": "filled" },
      ExpressionAttributeValues: { ":val": isFilled },
    })
  );
}
