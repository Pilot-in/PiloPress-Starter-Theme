<?php
$content = get_sub_field( 'content' );
$bg_img  = get_sub_field( 'background_image' );
?>

<div class="md:flex items-center bg-gray-100">
    <div class="p-8 sm:mb-10 md:w-1/2 md:mr-4 xl:pl-40">
        <?php echo $content; ?>
    </div>
    <div class="md:w-1/2 hidden sm:inline-block">
        <img src="<?php echo $bg_img['url'] ?>" alt="<?php echo $bg_img['alt'] ?>">
    </div>
</div>
