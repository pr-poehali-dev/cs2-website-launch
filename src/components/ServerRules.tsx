import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ServerRules = () => {
  const rules = [
    {
      category: "Общие правила",
      icon: "Shield",
      color: "bg-blue-600",
      items: [
        "Запрещены оскорбления и токсичное поведение",
        "Не используйте читы, баги или эксплойты",
        "Соблюдайте этику общения в чате",
        "Запрещена реклама сторонних ресурсов",
      ],
    },
    {
      category: "Игровые правила",
      icon: "Gamepad2",
      color: "bg-orange-600",
      items: [
        "Играйте за команду, не мешайте союзникам",
        "Запрещен тимкилл и блокировка teammates",
        "Не покидайте матч преждевременно",
        "Используйте микрофон для командной игры",
      ],
    },
    {
      category: "Наказания",
      icon: "AlertTriangle",
      color: "bg-red-600",
      items: [
        "Предупреждение за первое нарушение",
        "Мут/кик за повторные нарушения",
        "Бан на 1-7 дней за серьезные нарушения",
        "Перманентный бан за читы или многочисленные нарушения",
      ],
    },
  ];

  const contacts = [
    {
      platform: "Discord",
      link: "discord.gg/cs2server",
      icon: "MessageCircle",
    },
    { platform: "Telegram", link: "@cs2_admin", icon: "Send" },
    { platform: "Steam", link: "steamcommunity.com/groups/cs2", icon: "Users" },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-oswald">
            ПРАВИЛА СЕРВЕРА
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ознакомьтесь с правилами для комфортной игры всех участников
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {rules.map((section, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex items-center">
                  <div className={`${section.color} p-2 rounded-lg mr-4`}>
                    <Icon
                      name={section.icon as any}
                      size={20}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-white">
                    {section.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Контакты администрации */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-center">
              Связь с администрацией
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-slate-900 rounded-lg"
                >
                  <Icon
                    name={contact.icon as any}
                    size={20}
                    className="text-orange-500 mr-3"
                  />
                  <div>
                    <div className="text-white font-semibold">
                      {contact.platform}
                    </div>
                    <div className="text-gray-400 text-sm">{contact.link}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Badge className="bg-green-600 text-white">
                <Icon name="Clock" size={14} className="mr-1" />
                Поддержка 24/7
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServerRules;
