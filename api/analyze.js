// api/analyze.js

export default function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method Not Allowed" });
        return;
    }

    const { url } = req.body;

    // 仮の診断結果（実際はAIで生成予定）
    const result = {
        summary: "芸能人が映画を降板。不倫報道が原因。",
        impact: "一般人の生活には影響ありません。",
        emotions: ["正義感", "優越感", "倫理観"],
        suggestions: ["犬の動画を見る", "散歩に出る", "冷蔵庫を整理する"],
    };

    res.status(200).json(result);
}
