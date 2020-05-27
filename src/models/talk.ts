import { ListTalksQuery } from "../API";

interface Talk {
  id?: string;
  clientId?: string
  name?: string;
  speakerName?: string;
  speakerBio?: string;
  description?: string;
}

function mapTalks(listTalkQuery: ListTalksQuery): Talk[] {
  return listTalkQuery.listTalks?.items?.map(item => ({
    id: item?.id,
    clientId: item?.clientId || undefined,
    name: item?.name,
    speakerName: item?.speakerName,
    description: item?.description,
    speakerBio: item?.speakerBio
  })) || []
}

export default Talk;
export { mapTalks }