import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const SystemRequirements = () => {
  const requirements = {
    minimum: {
      title: "Минимальные",
      specs: [
        { label: "ОС", value: "Windows 10 64-bit" },
        { label: "Процессор", value: "Intel Core i5-2500K / AMD FX-6300" },
        { label: "Память", value: "8 GB RAM" },
        {
          label: "Видеокарта",
          value: "NVIDIA GTX 750 Ti / AMD Radeon R7 260X",
        },
        { label: "DirectX", value: "Версия 11" },
        { label: "Место на диске", value: "85 GB" },
        { label: "Сеть", value: "Широкополосное подключение" },
      ],
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    recommended: {
      title: "Рекомендуемые",
      specs: [
        { label: "ОС", value: "Windows 11 64-bit" },
        {
          label: "Процессор",
          value: "Intel Core i7-8700K / AMD Ryzen 5 2600X",
        },
        { label: "Память", value: "16 GB RAM" },
        { label: "Видеокарта", value: "NVIDIA GTX 1060 / AMD RX 580" },
        { label: "DirectX", value: "Версия 12" },
        { label: "Место на диске", value: "85 GB SSD" },
        { label: "Сеть", value: "Широкополосное подключение" },
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-oswald">
            СИСТЕМНЫЕ ТРЕБОВАНИЯ
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Убедитесь, что ваш компьютер готов к интенсивным боям
          </p>
        </div>

        {/* Requirements cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(requirements).map(([key, req]) => (
            <Card
              key={key}
              className="bg-slate-900 border-slate-800 hover:border-orange-500/50 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${req.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon name="Monitor" size={32} className={req.color} />
                </div>
                <CardTitle className={`text-2xl font-oswald ${req.color}`}>
                  {req.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {req.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-slate-800 last:border-b-0"
                    >
                      <span className="text-gray-400 font-medium">
                        {spec.label}:
                      </span>
                      <span className="text-white text-right max-w-xs">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="bg-slate-900 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="HardDrive" size={32} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white font-oswald">
                Свободное место
              </h3>
              <p className="text-gray-400">
                Для комфортной игры рекомендуется SSD-накопитель
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Wifi" size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white font-oswald">
                Интернет
              </h3>
              <p className="text-gray-400">
                Стабильное подключение для онлайн-игры
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Gamepad2" size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white font-oswald">
                Управление
              </h3>
              <p className="text-gray-400">
                Клавиатура и мышь для максимальной точности
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemRequirements;
