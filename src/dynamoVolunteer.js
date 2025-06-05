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

export async function updateOpportunity(id, modalOppsTitle) {
  await docClient.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #modalOppsTitle = :val",
      ExpressionAttributeNames: { "#modalOppsTitle": "title" },
      ExpressionAttributeValues: { ":val": modalOppsTitle},
    })
  );
}

export async function updateOpportunityDescription(id, modalOppsDescription) {
  await docClient.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #modalOppsDescription = :val",
      ExpressionAttributeNames: { "#modalOppsDescription": "description" },
      ExpressionAttributeValues: { ":val": modalOppsDescription },
    })
  );
}

export async function updateOpportunityLocation(id, location) {
  await docClient.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #location = :val",
      ExpressionAttributeNames: { "#location": "location" },
      ExpressionAttributeValues: { ":val": location },
    })
  );
}

export async function updateOpportunity1(id, day1) {
  await docClient.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #day1 = :val",
      ExpressionAttributeNames: { "#day1": "day1" },
      ExpressionAttributeValues: { ":val": day1 },
    })
  );
}
export async function updateOpportunity2(id, day2) {
  await docClient.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #day2 = :val",
      ExpressionAttributeNames: { "#day2": "day2" },
      ExpressionAttributeValues: { ":val": day2 },
    })
  );
}
export async function updateOpportunity3(id, day3) {
  await docClient.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #day3 = :val",
      ExpressionAttributeNames: { "#day3": "day3" },
      ExpressionAttributeValues: { ":val": day3 },
    })
  );
}
export async function updateOpportunity4(id, day4) {
  await docClient.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #day4 = :val",
      ExpressionAttributeNames: { "#day4": "day4" },
      ExpressionAttributeValues: { ":val": day4 },
    })
  );
}
export async function updateOpportunity5(id, day5) {
  await docClient.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #day5 = :val",
      ExpressionAttributeNames: { "#day5": "day5" },
      ExpressionAttributeValues: { ":val": day5 },
    })
  );
}
export async function updateOpportunity6(id, day6) {
  await docClient.send(
    new UpdateCommand({
      TableName: TABLE,
      Key: { id },
      UpdateExpression: "SET #day6 = :val",
      ExpressionAttributeNames: { "#day6": "day6" },
      ExpressionAttributeValues: { ":val": day6 },
    })
  );
}
