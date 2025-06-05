import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Donation = () => {
  const donationPackages = [
    {
      name: "Supporter",
      price: "199₽",
      features: ["VIP статус на 30 дней", "Цветной ник", "Приоритет в очереди"],
      color: "bg-blue-600",
      popular: false,
    },
    {
      name: "Premium",
      price: "499₽",
      features: [
        "VIP статус на 90 дней",
        "Эксклюзивные скины",
        "Доступ к VIP серверам",
        "Бонус +50% опыта",
      ],
      color: "bg-orange-600",
      popular: true,
    },
    {
      name: "Elite",
      price: "999₽",
      features: [
        "VIP статус на 180 дней",
        "Все скины бесплатно",
        "Личный сервер",
        "Приоритетная поддержка",
      ],
      color: "bg-purple-600",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-oswald">
            ПОДДЕРЖАТЬ ПРОЕКТ
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Помогите развитию сервера и получите эксклюзивные привилегии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {donationPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative bg-slate-800 border-slate-700 ${pkg.popular ? "border-orange-500 border-2" : ""}`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white">
                  Популярный
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">
                  {pkg.name}
                </CardTitle>
                <div
                  className={`text-4xl font-bold text-white p-4 rounded-lg ${pkg.color} mx-auto w-fit`}
                >
                  {pkg.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3"
                    />
                    {feature}
                  </div>
                ))}
                <Button
                  className={`w-full mt-6 text-white ${pkg.color} hover:opacity-90`}
                >
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  Купить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donation;
