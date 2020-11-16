from enum import Enum

class CategoryEnum(Enum):
    FURNITURE = 'FURNITURE'
    ELECTRONICS = 'ELECTRONICS'
    CLOTHES = 'CLOTHES'
    FOOD = 'FOOD'
    OTHER = 'OTHER'

    @classmethod
    def choices(cls):
        return [(key.value, key.name) for key in cls]
