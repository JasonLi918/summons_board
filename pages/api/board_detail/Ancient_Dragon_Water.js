export default function handler(req, res) {
  res.status(200).json(
      {
        'Number':'2887',
        'Image':'https://imgur.com/CqiklCo.jpg',
        'Name_tc':'水古龍',
        'Name_jp':'真凍古龍・エスベル',
        'hp':'17559',
        'Atk_before':'278x3(4)回',
        'Atk_after':'308x3(4)回',
        'Soul':'5格',
        'Type':['平衡type','反擊type'],
        'Characteristic_Before':['飛行','愛心UP'],
        'Characteristic_After':['飛行','愛心UP','貫通 Lv2'],
        'Tp_Transform':'30',
        'Tp_Characteristic':'道具效果強化(隨機)',
        'Comment':"水古龍"
      }
    )
}