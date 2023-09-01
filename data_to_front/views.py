from django.http import JsonResponse

from .models import MenuOptions, AdvantagesOptions
from .serializer import MenuOptionsSerializer, AdvantagesOptionsSerializer


def get_data(request):
    menu_options = MenuOptions.objects.all()
    advantages_options = AdvantagesOptions.objects.all()

    menu_options_serializer = MenuOptionsSerializer(menu_options, many=True)
    advantages_options_serializer = AdvantagesOptionsSerializer(advantages_options, many=True)

    data = {
        "menu_options": menu_options_serializer.data,  # Используйте .data для сериализованных данных
        "advantages_options": advantages_options_serializer.data,  # Используйте .data для сериализованных данных
    }
    print(data)
    return JsonResponse(data)

