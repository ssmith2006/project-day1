import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

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
