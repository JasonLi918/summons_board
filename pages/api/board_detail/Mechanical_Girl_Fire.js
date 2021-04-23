export default function handler(req, res) {
  res.status(200).json(
  		{
  			'Number':'3461',
  			'Image':'https://i.imgur.com/fLAGnqg.jpg',
  			'Name_tc':'火機娘',
  			'Name_jp':'02式戦克:メイシン',
  			'hp':'16808',
  			'Atk_before':'383x3(4)回',
  			'Atk_after':'428x3(4)回',
  			'Soul':'5格',
  			'Type':['攻擊type','強襲type'],
  			'Characteristic_Before':['對空攻擊 Lv1','技能盾 Lv1&追加攻擊'],
  			'Characteristic_After':['對空攻擊 Lv1','貫通 Lv3','技能盾 Lv1&追加攻擊'],
  			'Tp_Transform':'25',
  			'Tp_Characteristic':'弱點賦予',
  			'Comment':"火機娘"
  		}
  	)
}