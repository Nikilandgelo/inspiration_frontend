from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=[".env"])

    DEBUG: bool = bool(0)
    # id of maddul page in VK
    TEST_RECIEVER_ID: int = 486706721
    TEST_API_KEY: str = ""

    API_KEY: str
    RECIEVER_ID: int

    TITLE: str = "Inspiration API"
    DESCRIPTION: str = "Mini API for sending messages to VK"
    VERSION: str = "1.0.0"
    CONTACT_NAME: str = "Nikita"
    CONTACT_URL: str = "https://t.me/niki_landgelo"
    CONTACT_EMAIL: str = "niki_landgelo@outlook.com"


@lru_cache
def get_settings() -> Settings:
    return Settings()
