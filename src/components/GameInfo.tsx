import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const GameInfo = () => {
  const features = [
    {
      icon: "Target",
      title: "Улучшенная графика",
      description:
        "Новый движок Source 2 обеспечивает невероятную детализацию и реалистичную физику",
    },
    {
      icon: "Users",
      title: "Командная игра",
      description:
        "Классический формат 5 на 5 с упором на тактику и командное взаимодействие",
    },
    {
      icon: "Trophy",
      title: "Киберспорт",
      description:
        "Официальные турниры с призовыми фондами в миллионы долларов",
    },
    {
      icon: "Shield",
      title: "Анти-чит",
      description:
        "Продвинутая система VAC защищает от читеров и обеспечивает честную игру",
    },
  ];

  const gameModes = [
    { name: "Соревновательный", players: "5v5", duration: "45 мин" },
    { name: "Casual", players: "10v10", duration: "15 мин" },
    { name: "Deathmatch", players: "До 20", duration: "10 мин" },
    { name: "Demolition", players: "5v5", duration: "30 мин" },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-oswald">
            ОСОБЕННОСТИ ИГРЫ
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Counter-Strike 2 — это не просто обновление, это полная перезагрузка
            легендарной серии
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-900 border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={feature.icon}
                    size={32}
                    className="text-orange-500"
                  />
                </div>
                <CardTitle className="text-white text-xl font-oswald">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Game modes */}
        <div className="bg-slate-900 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center font-oswald">
            РЕЖИМЫ ИГРЫ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameModes.map((mode, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors"
              >
                <h4 className="text-xl font-bold text-white mb-3 font-oswald">
                  {mode.name}
                </h4>
                <div className="space-y-2">
                  <Badge
                    variant="outline"
                    className="border-orange-500 text-orange-500"
                  >
                    {mode.players}
                  </Badge>
                  <div className="text-gray-400 text-sm">{mode.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInfo;
