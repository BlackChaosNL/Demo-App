export class RESPONSE_DTO {
    room_id: string = "";
    start_date: Date = new Date();
    end_date: Date = new Date();
    total_visitors_with_conversation_count: number = 0;
    total_visitors_affected_by_chat_count: number = 0;
    total_visitors_autosuggested_count: number = 0;
    total_visitors_with_chat_count: number = 0;
    total_chats_from_autosuggest_count: number = 0;
    total_chats_from_user_count: number = 0;
    total_chats_from_visitor_count: number = 0;
    total_conversation_count: number = 0;
    total_user_message_count: number = 0;
    total_visitor_message_count: number = 0;
    total_missed_chat_count: number = 0;
    by_date: Array<Object> = [];
}
