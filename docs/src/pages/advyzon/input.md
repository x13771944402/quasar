---
title: Advyzon Input
desc: The QAvatar Vue component creates an element that can embed a letter, an icon or an image within its shape.
keys: QAvatar
---
Custom Advyzon Input
The QInput component is used to capture text input from the user. It uses `v-model`, similar to a regular input. It has support for errors and validation, and comes in a variety of styles, colors, and types.

## Advyzon Input API

<doc-api file="QInput" />

::: warning
For your QInput you can use only one of the main designs (`filled`, `outlined`, `standout`, `borderless`). You cannot use multiple as they are self-exclusive.
:::

## Usage

::: tip
The `size` property will determine the height and the width of the Avatar. The `font-size` property will set the size of the font used within the Avatar, which will have an effect on the size of letters and icons.
:::

<doc-example title="Design Overview" file="QInput/DesignOverview" />

### Coloring

<doc-example title="Coloring" file="QInput/Coloring" />

### Standard
<doc-example title="Standard" file="QInput/DesignStandard" />

### Filled
<doc-example title="Filled" file="QInput/DesignFilled" />

### Outlined
<doc-example title="Outlined" file="QInput/DesignOutlined" />

### Standout
<doc-example title="Standout" file="QInput/DesignStandout" />

One of the most appropriate use cases for Standout design is in a QToolbar:

<doc-example title="Standout in QToolbar" file="QInput/StandoutToolbar" />

### Borderless
The `borderless` design allows you to seamlessly integrate your QInput into other components without QInput drawing a border around itself or changing its background color:

<doc-example title="Borderless" file="QInput/Borderless" />

### Rounded design

The `rounded` prop only works along with Filled, Outlined and Standout designs, as showcased in the example below:

<doc-example title="Rounded" file="QInput/Rounded" />

### Square borders

The `square` prop only makes sense along with Filled, Outlined and Standout designs, as showcased in the example below:

<doc-example title="Square borders" file="QInput/SquareBorders" />

### Dark background

<doc-example title="Dark" file="QInput/Dark" dark />
