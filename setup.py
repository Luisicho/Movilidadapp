from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in movilidadapp/__init__.py
from movilidadapp import __version__ as version

setup(
	name="movilidadapp",
	version=version,
	description="Esta la aplicacion para gestionar la plataforma de la secretaria de movili",
	author="Luis Miguel Hernandez Macias 2023",
	author_email="luism18.1999@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
