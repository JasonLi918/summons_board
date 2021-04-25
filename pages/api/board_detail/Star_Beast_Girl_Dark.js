export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3433',
  			'Image':'https://i.imgur.com/DZJ33Bk.jpg',
  			'Name_tc':'暗星獸姬',
  			'Name_jp':'幻星獣姫ルゼリッタ',
  			'hp':'16538',
  			'Atk_before':'383x3(4)回',
  			'Atk_after':'435x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','輔助type'],
  			'Characteristic_Before':['技能盾 Lv1','攻擊吸收 Lv2'],
  			'Characteristic_After':['迴避性能 Lv3','技能盾 Lv1','攻擊吸收 Lv2'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'陷阱發動',
  			'Comment':"暗星獸姬"
  		}
  	)
}