export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3772',
  			'Image':'https://imgur.com/P58hf3e.jpg',
  			'Name_tc':'暗天星',
  			'Name_jp':'無天星神獣サトゥルヌス',
  			'hp':'38679',
  			'Atk_before':'412x3(4)回',
  			'Atk_after':'432x3(4)回',
  			'Soul':'5格',
  			'Type':['平衡type','反擊type'],
  			'Characteristic_Before':['貫通 Lv3','技能盾 Lv1&追加攻擊'],
  			'Characteristic_After':['貫通 Lv3','技能盾 Lv1&追加攻擊','道具吸收 Lv1'],
  			'Tp_Transform':'30',
  			'Tp_Characteristic':'道具效果強化(攻擊)',
  			'Comment':"暗天星"
  		}
  	)
}