import logging


def get_logger() -> logging.Logger:
    logger = logging.getLogger("Inspiration_backend")
    if not logger.handlers:
        logger.propagate = False
        logger.setLevel(logging.INFO)
        handler = logging.StreamHandler()
        handler.setFormatter(logging.Formatter(fmt="{levelname}: {message}", style="{"))
        logger.addHandler(handler)
    return logger
