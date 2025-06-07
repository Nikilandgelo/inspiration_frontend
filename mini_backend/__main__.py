import uvicorn

uvicorn.run(
    "mini_backend.app:app",
    host="0.0.0.0",
    port=8080,
    workers=2
)
