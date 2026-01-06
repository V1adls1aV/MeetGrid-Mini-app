interface ConstraintInterval {
  start: string;
  end: string;
}

interface TopicData {
  topic_id: string;
  topic_name: string;
  admin_name: string;
  description?: string;
  constraints?: ConstraintInterval[];
  created_at: string;
}

interface CreatedTopicResponse {
  invite_link: string;
  topic: TopicData;
}

interface TopicCreatePayload {
  topic_name: string;
  description?: string;
  constraints?: ConstraintInterval[];
}

export type { CreatedTopicResponse, TopicCreatePayload, TopicData };
