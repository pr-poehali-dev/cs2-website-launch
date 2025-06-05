import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SkinChanger = () => {
  const skinCategories = [
    {
      name: "Винтовки",
      icon: "Crosshair",
      count: "150+",
      preview: "AK-47 Redline, M4A4 Howl",
    },
    {
      name: "Пистолеты",
      icon: "Target",
      count: "80+",
      preview: "Glock Fade, USP-S Kill Confirmed",
    },
    {
      name: "Ножи",
      icon: "Sword",
      count: "45+",
      preview: "Karambit Doppler, Butterfly Knife",
    },
    {
      name: "Гранаты",
      icon: "Bomb",
      count: "25+",
      preview: "Эксклюзивные дизайны",
    },
  ];

  const features = [
    "Мгновенная смена скинов",
    "Доступ ко всем раритетным скинам",
    "Возможность создания наборов",
    "Синхронизация между серверами",
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-oswald">
            СКИНЧЕНЖЕР
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Используйте любые скины бесплатно на наших серверах
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Категории скинов */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Категории скинов
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skinCategories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-slate-800 border-slate-700 hover:border-orange-500 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-orange-600 p-2 rounded-lg mr-4">
                        <Icon
                          name={category.icon as any}
                          size={20}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          {category.name}
                        </h4>
                        <Badge
                          variant="secondary"
                          className="bg-slate-700 text-gray-300"
                        >
                          {category.count}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">{category.preview}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Преимущества */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Преимущества</h3>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-4"
                      />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать скинченжер
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-white hover:bg-gray-800"
                  >
                    <Icon name="FileText" size={16} className="mr-2" />
                    Инструкция по установке
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinChanger;
