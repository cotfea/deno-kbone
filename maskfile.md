# Tasks

## hello

```sh
echo Hello World!!!
```

## run-dev

```sh
podman run --rm -ti \
  --name dev \
  -v $(pwd):/root/dev \
  mooxe/node \
  /bin/bash
```
