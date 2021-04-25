export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3263',
  			'Image':'https://imgur.com/GMca4ei.jpg',
  			'Name_tc':'幻天星獸',
  			'Name_jp':'幻天星神獣フェンガリ',
  			'hp':'34006',
  			'Atk_before':'144x3(4)回',
  			'Atk_after':'212x3(4)回',
  			'Soul':'5格',
  			'Type':['HPtype','輔助type'],
  			'Characteristic_Before':['飛行','全體化'],
  			'Characteristic_After':['飛行','全體化','對地攻擊 Lv2'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'陷阱發動',
  			'Comment':"幻天星獸"
  		}
  	)
}